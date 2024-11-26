export type User = {
  id: string;
  name: string;
  email: string;
  role: "USER" | "ADMIN" | "MANAGER";
  status: "ACTIVE" | "INACTIVE";
};

export const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "USER",
    status: "ACTIVE",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "ADMIN",
    status: "ACTIVE",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "MANAGER",
    status: "INACTIVE",
  },
  {
    id: "4",
    name: "Alice Brown",
    email: "alice@example.com",
    role: "USER",
    status: "ACTIVE",
  },
  {
    id: "5",
    name: "Charlie Davis",
    email: "charlie@example.com",
    role: "USER",
    status: "INACTIVE",
  },
  {
    id: "6",
    name: "Eva Wilson",
    email: "eva@example.com",
    role: "ADMIN",
    status: "ACTIVE",
  },
  {
    id: "7",
    name: "Frank Miller",
    email: "frank@example.com",
    role: "MANAGER",
    status: "ACTIVE",
  },
  {
    id: "8",
    name: "Grace Lee",
    email: "grace@example.com",
    role: "USER",
    status: "INACTIVE",
  },
  {
    id: "9",
    name: "Henry Taylor",
    email: "henry@example.com",
    role: "USER",
    status: "ACTIVE",
  },
  {
    id: "10",
    name: "Ivy Clark",
    email: "ivy@example.com",
    role: "ADMIN",
    status: "INACTIVE",
  },
  {
    id: "11",
    name: "Ivy Clark",
    email: "ivy@example.com",
    role: "ADMIN",
    status: "INACTIVE",
  },
];
