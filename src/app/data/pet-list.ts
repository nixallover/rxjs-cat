import { Pet } from '../models/pet.model';

export const petList = (): Pet[] => {
  return [
    new Pet('Rover', 'dog', 4),
    new Pet('Marbles', 'cat', 1),
    new Pet('Bailey', 'dog', 13),
    new Pet('Sassy', 'cat', 11),
    new Pet('Betty', 'cat', 6),
    new Pet('Theodore', 'dog', 8),
    new Pet('Banana', 'bird', 6),
  ];
};
