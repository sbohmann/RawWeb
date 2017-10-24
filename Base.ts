
export abstract class Base
{
    static create(subtype: number): Base
    {
        switch (subtype)
        {
            case 1:
                return new Derived();
        }
    }

    abstract f();
}

import { Derived } from './Derived';
