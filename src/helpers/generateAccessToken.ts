import jwt from 'jsonwebtoken';
import { SECRET_KEY } from 'src/config/config';

const generateAccessToken = (id: string, role: string) => {
    const payload = {
      id,
      role,
    };
  
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });
  };

export default generateAccessToken;