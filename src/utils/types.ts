// Room interface
export interface Room {
  id: string;
  roomName: string;
  max_capacity: number;
  isReserved: boolean;
  createdAt: Date;
  modiedAt: Date;
  equipement: EQUIPEMENT[];
}

// Meeting interface
export interface Meeting {
  id: string;
  meetingName: string;
  startDate: Date;
  endDate: Date;
  typeMeeting: TYPE_MEEETING;
  persnalNumber: number;
}

// Enums
export enum EQUIPEMENT {
  Ecran = "Ecran",
  Pieuvre = "Pieuvre",
  Tableau = "Tableau",
  Neant = "Neant",
  Webcam = "Webcam",
}

export enum TYPE_MEEETING {
  VC = "VC",
  SPEC = "SPEC",
  RS = "RS",
  RC = "RC",
}
