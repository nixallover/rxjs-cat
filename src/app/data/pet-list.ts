import { Pet } from '../models/pet.model';

export const createPetList = (): Pet[] => {
  return [
    new Pet('Rover', 'dog', 10),
    new Pet('Marbles', 'cat', 7),
    new Pet('Charlie', 'bird', 8),
    new Pet('Bailey', 'dog', 6),
    new Pet('Sassy', 'cat', 1),
    new Pet('Betty', 'cat', 6),
    new Pet('Theodore', 'dog', 8),
    new Pet('Banana', 'bird', 6),
    new Pet('Rudo', 'dog', 4),
    new Pet('Sam', 'bird', 3),
    new Pet('Tigger', 'cat', 10),
    new Pet('Milo', 'dog', 2),
    new Pet('Smokey', 'cat', 2),
    new Pet('Gizmo', 'bird', 3),
    new Pet('Simba', 'cat', 6),
    new Pet('Oreo', 'cat', 9),
  ];
};
