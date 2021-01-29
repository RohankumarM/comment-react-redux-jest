import React from 'react';
import { mount } from 'enzyme';
import Root from '../Root';
import App from '../components/App';
import moxios from 'moxios';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetch no 1' }, { name: 'Fetch no 2' }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and render them out', (done) => {
  //rendering the entire App first
  const wrapped = mount(
    <Root>
      <App />
    </Root>)
  //finding the fetch button
  wrapped.find('.fetch_comments').simulate('click');

  //introduce a little pause for moxios buddy
  moxios.wait(() => {
    wrapped.update();

    //expect to find the list of comments in li tags
    expect(wrapped.find('li').length).toEqual(2);

    done();
    wrapped.unmount();
  });

});