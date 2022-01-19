import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory';


describe('Pruebas en <AddCategory />', () => {
    //Creación de una función simulada, para poder realizar el testing 
    //donde se requiere llamar la función de setCategories
    const setCategories = jest.fn();
    let wrapper;

    //Ciclo de vida para ejecutar todo lo que se necesite para reinicializar valores
    beforeEach( () => {
        jest.clearAllMocks();
     wrapper = shallow(<AddCategory setcategories={setCategories}/>);

    })

    test('Debe de mostrarse correctamente el <AddCategory/>', () => {
        expect(wrapper).toMatchSnapshot();

    });
    
    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');

        //Para simular el evento de onChange, se utiliza el simulate.
        //El  evento de un input change se define como "{}" este objeto es el que tiene el valor de "e" osea del evento
        const value = 'Hola Mundo';
        input.simulate('change',{
            target: {
                value: value 
            }
        });  

        expect(wrapper.find('p').text().trim()).toBe(value);
    }); 

    test('No debe de postear la información con submit', () => {
        wrapper.find('form').simulate('submit',{
             //preventDefault: () => {}
            //Forma corta sería:
            preventDefault(){}
           
        });
        //En el AddCategory, se tiene la condición de que si el value es
        //null no se ejecute la función. Por lo tanto al no tener valor el value no se 
        //ejecuta la función. Por lo tanto al hacer el expect este esta correcto porque 
        //al poner el .not le estamos diciendo que no debío ser llamado
        expect(setCategories).not.toHaveBeenCalled();
        
    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Burgers';
        //Forma mas compactada de escribir el wraper.find con el simulate
        wrapper.find('input').simulate('change', {target: { value }});
        //Es lo mismo que la línea de código de arriba pero desarrollado para enteder mejor.
        // const input = wrapper.find('input');
        // input.simulate('change',{
        //     target: {
        //         value: value
        //     }
        // });
        wrapper.find('form').simulate('submit', {  preventDefault() {} });
       
        //console.log(value);
        expect(setCategories).toHaveBeenCalled();
        // Se esperaba que la función setCategories se llamara 2 veces
        //expect(setCategories).toHaveBeenCalledTimes(2);

        //Es para asegurarnos de que lo que se haya llamado sea una función
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function));


        expect( wrapper.find('input').prop('value')).toBe('');
    })
    
    
    
    
})
