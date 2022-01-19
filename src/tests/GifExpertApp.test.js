import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('Probar que el componente <GifExpertApp /> funcione correctamente', () => {

    test('Debe de mostrar correctamente el <GifExpertApp/>', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrara una lista de categorias', () => {
        const categories = ['One Punch', 'Burger'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
    
})
