import React from 'react';
import { Excuse } from '../../interfaces/excuse';
import ExcuseCard from './Excuse';

interface ExcusesProps {
    excuses: Excuse[];
}

const Excuses: React.FC<ExcusesProps> = ({ excuses }) => {
    return (
        <div>
            {excuses.map((excuse) => (
                <ExcuseCard
                    key={excuse.id}
                    title={excuse.title}
                    dateCreated={excuse.dateCreated}
                    content={excuse.content}
                />
            ))}
        </div>
    );
}

export default Excuses;
