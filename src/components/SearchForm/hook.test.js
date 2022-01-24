import { renderHook, act } from '@testing-library/react-hooks'
import useForm from './useForm'

describe('useForm hook', () => {
    test('should change keyword', () => {
        const { result } = renderHook(() => useForm());
        act(() => {
            result.current.updateKeyword('house');
        });
        expect(result.current.keyword).toBe('house');
    });

    test('should change rating', () => {
        const { result } = renderHook(() => useForm());
        act(() => {
            result.current.updateRating('pg-13');
        });
        expect(result.current.rating).toBe('pg-13');
    });


    test('should change keyword & rating', () => {
        const { result } = renderHook(() => useForm());
        act(() => {
            result.current.updateKeyword('matrix');
            result.current.updateRating('pg');
        });
        expect(result.current.keyword).toBe('matrix');
        expect(result.current.rating).toBe('pg');
        expect(result.current).toBeDefined();
    });

    test('should run with initial values', () => {
        const { result } = renderHook(() => useForm({ initialKeyword: 'Bananas', initialRating: 'r' }));
        expect(result.current.keyword).toBe('Bananas');
        expect(result.current.rating).toBe('r');
    });

    test('should have default values (keyword & rating)', () => {
        const { result } = renderHook(() => useForm());
        expect(result.current.keyword).toBe('');
        expect(result.current.rating).toBe('g');
    });
})