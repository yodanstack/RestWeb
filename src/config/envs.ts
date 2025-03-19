import 'dotenv/congif';
import {get} from 'env-var';


export const envs = 
{
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}

