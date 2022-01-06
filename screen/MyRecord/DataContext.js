import React, { useState } from 'react';

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(() => [
        {
            id: 1,
            code: 142,
            name: 'SOR Quality Record',
            type: 'Pay Item',
            status: 'Draft',
            date: '29 Dec 2021',
            codeDt: 123,
            job: '80612 - 2C - Southbank Boulevard',
            foreman: 'Erin Maket',
            engineer: 'Firmin Li',
            location: 'Acciona Port Melbourne-174 Turner Street Port Melbourne',
            effort: '0 Hours 3 mins',
            uom: 'Kilogam',
            rate: 112,
            quantity: 25,
            proposed: 2800,
            comment: 'test'
        },
        {
            id: 2,
            code: 143,
            name: 'SOR Quality Record',
            type: 'Pay Item',
            status: 'Draft',
            date: '28 Dec 2021',
            codeDt: 123,
            job: '80612 - 2C - Southbank Boulevard',
            foreman: 'Erin Maket',
            engineer: 'Firmin Li',
            location: 'Acciona Port Melbourne-174 Turner Street Port Melbourne',
            effort: '0 Hours 3 mins',
            uom: 'Kilogam',
            rate: 112,
            quantity: 25,
            proposed: 2800,
            comment: 'test'
        }
    ]);

    return (
        <DataContext.Provider
            value={{
                data: data,
                setData: setData
            }}>
            {children}
        </DataContext.Provider>
    );
}
