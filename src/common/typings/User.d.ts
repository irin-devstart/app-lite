interface User {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  is_active: bolean;
}

interface UserLogin {
  email: string;
  password: string;
  remember_me: number;
}
