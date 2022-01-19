import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from "@testing-library/react-hooks";
describe('Pruebas en el hook  <useFetchGifs/>', () => {
    test('Debe de retornar el estado inicial', async () => {
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('Burger'));
        const {data, loading} = result.current;
        await waitForNextUpdate();

        //const {data, loading} = useFetchGifs('Burger');
        //console.log(data, loading);

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
    }); 

    test('Debe de retornar un arreglo de imgs y el loading en false', async() => {
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('Burger'));
        await waitForNextUpdate();
        const {data, loading} = result.current;
        //const {data, loading} = useFetchGifs('Burger');
        //console.log(data, loading);

        expect( data.length ).toBe(10);
        expect( loading ).toBe(false);
    });
    
    
})
