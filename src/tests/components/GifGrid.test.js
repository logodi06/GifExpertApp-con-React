import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs";
import '@testing-library/jest-dom';
//Con el jest.mock es fingir cualquier llamada a ese archivo y 
//controlar la información que va a responder
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en <GifGrid /> ', () => {
    const category = 'burger';


    test('Debe de mostrar correctamente  <GifGrid />', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        },
        {
            id: '123',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }]
        //COn el mock se finge como si el customHook regresara la data ya cargada
         //como si ya tuviera y  regresara la información que debe
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
       
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
    
    
})
