export interface Character {
    id:               string;
    name:             string;
    alternate_names:  string[];
    species:          Species;
    gender:           Gender;
    house:            House;
    dateOfBirth:      null | string;
    yearOfBirth:      number | null;
    wizard:           boolean;
    ancestry:         Ancestry;
    eyeColour:        EyeColour;
    hairColour:       string;
    wand:             Wand;
    patronus:         Patronus;
    hogwartsStudent:  boolean;
    hogwartsStaff:    boolean;
    actor:            string;
    alternate_actors: string[];
    alive:            boolean;
    image:            string;
}

export enum Ancestry {
    Empty = "",
    HalfBlood = "half-blood",
    PureBlood = "pure-blood",
}

export enum EyeColour {
    Black = "black",
    Brown = "brown",
    Empty = "",
    Green = "green",
    Grey = "grey",
    Red = "red",
}

export enum Gender {
    Female = "female",
    Male = "male",
}

export enum House {
    Slytherin = "Slytherin",
}

export enum Patronus {
    Doe = "doe",
    Empty = "",
    PersianCat = "persian cat",
}

export enum Species {
    Ghost = "ghost",
    Human = "human",
}

export interface Wand {
    wood:   string;
    core:   Core;
    length: number | null;
}

export enum Core {
    DragonHeartstring = "dragon heartstring",
    Empty = "",
    PhoenixFeather = "phoenix feather",
    UnicornTailHair = "unicorn tail-hair",
}
