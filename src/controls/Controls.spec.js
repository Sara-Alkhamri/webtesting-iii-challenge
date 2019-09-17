// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

describe('<Controls />', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Controls />);

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('should button fire when toggle locked is called', () => {
        const mockClosed = jest.fn()
        const { getByText } = render(<Controls toggleLocked={mockClosed} locked={true} closed={true}/>)
        fireEvent.click(getByText("Unlock Gate"))
        expect(mockClosed).toHaveBeenCalled()
      })
    
    it('should button fire when toggle closed is called', () => {
        const mockClosed = jest.fn()
        const { getByText } = render(<Controls toggleClosed={mockClosed} locked={false} closed={false}/>)
        fireEvent.click(getByText("Close Gate"))
        expect(mockClosed).toHaveBeenCalled()
    })  

    it('should lock gate', () => {
        const {getByText} = render(<Controls />) 
        expect(getByText('Lock Gate').disabled).toBeTruthy()
    })

    it('should open gate', () => {
        const {getByText} = render(<Controls locked={true} closed={true} />) 
        expect(getByText('Open Gate').disabled).toBeTruthy()
    })
})