
import { shallow } from "enzyme";
import GifGridItem from '../../components/GifGridItem'
// import '@testing-library/jest-dom';
// import { setupTests } from "../../setupTests";


describe('Pruebas en GifExpertApp', () => {
    const title= 'Un título';
    const url = 'https://localhost/algo.jpg';
    
    const wrapper = shallow( <GifGridItem title={title} url={url} /> );
  
    test('Debe mostrar el componente GifExpertApp correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener un párrafo con el title', () => {
        const p = wrapper.find('p');
       expect(p.text().trim()).toBe(title); 
    }); 

    test('Debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        //console.log(img.props('src'));
        
        //console.log(img.props().src);
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Debe de tener animate_fadeIn', () => {
        const div =  wrapper.find('div');
        const nameClass = (div.props().className);
        //console.log(nameClass);
        expect(nameClass.includes('animate__fadeIn')).toBe(true);
    });
    
    
    
    
})
