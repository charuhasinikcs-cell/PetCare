
export interface Pet {
  id: string;
  name: string;
  age: string;
  breed: string;
  weight: string;
  type: 'dog' | 'cat' | 'other';
  notes: string;
}

export interface Vaccination {
  name: string;
  date: string;
  status: 'Completed' | 'Upcoming';
  type: string;
}

export interface MealPlan {
  time: string;
  meal: string;
  portion: string;
  nutrients: string[];
}
