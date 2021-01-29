import React from 'react';
import CommentBox from '../CommentBox';
import { mount } from 'enzyme';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has a textArea and a two buttons', () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

describe('the textarea', () => {

  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    wrapped.update();
  });

  it('has a textarea that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('emties the textarea when user pressed submit', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });

});

