import AppBreadcrumb, { BreadcrumbItem } from "@/components/app-breadcrumb";
import AppTitleCard from "@/components/app-titlecard";
import ListUsers from "@/components/ListUsers";

const ListUsersPage = () => {
  const breadcrumbItems: BreadcrumbItem[] = [
    {
      label: "User Management",
      isActive: true,
    },
  ];
  return (
    <div>
      <AppBreadcrumb breadcrumbItems={breadcrumbItems} />
      <AppTitleCard
        title="User Management"
        subTitle="List the users with their details and roles."
      />
      <ListUsers />
    </div>
  );
};

export default ListUsersPage;
