import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
// import configureStore from 'redux-mock-store'

import Home from "../../app/views/Home";
import Table from "../../app/components/Table"

describe('<Home />', () => {
      it('renders the component', () => {
        const wrapper = shallow(<Home />);
        expect (wrapper.exists()).toBeTruthy();
      });
    it("user text is echoed", ()=>{
        const wrapper = shallow(<Home />);
        wrapper.find("input").simulate("change", {
            target:{value:"Desmond", name:'search'}
        });
        expect(wrapper.find("input").props().value).toEqual("Desmond");
    });
    it("When Search button is clicked, the event is cancelled", ()=>{
        const wrapper = shallow(<Home />);
        let prevented = false;
        wrapper.find("#search-btn").simulate("click",{
            preventDefault: ()=>{
                prevented = true;
            }
        });
        expect (prevented).toBeTruthy();
    });
    it("When the Search button is clicked, the table is Rendered with the correct data", ()=>{
        const wrapper = mount(<Home />);
        wrapper.find("input").simulate("change", {
            target:{value:"Desmond", name:'search'}
        });
        wrapper.find("#search-btn").simulate("click",{ });
        expect(wrapper.contains(<td>Desmond</td>)).toBeTruthy();
    });
    it("When the input field is empty, the error block is rendered", ()=>{
        const wrapper = mount (<Home/>);
        wrapper.find("#search-btn").simulate("click", {});
        expect(wrapper.contains(<span> Input Error</span>)).toBeTruthy();
    })

  });