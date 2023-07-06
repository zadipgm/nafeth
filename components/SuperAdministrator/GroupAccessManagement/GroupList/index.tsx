import { Table, Row, Col, Tooltip, Text } from "@nextui-org/react";

import { EditIcon } from "@/public/icons/editSvg";
import { EyeSvg } from "@/public/icons/eyeSvg";
import { DeleteIcon } from "@/public/icons/deleteSvg";
import DublicateSvg from "@/public/icons/DublicateSvg";
import { useRouter } from "next/router";
import { Fab, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Status } from "../style";
interface UserType {
  id: string | number;
  name?: string;
  email?: string;
  description?: string;
  team?: string;
  status: "active" | "In-active";
  age?: string;
  avatar?: string;
}

const DataTable = () => {
  const router = useRouter();
  const columns = [
    { name: "NAME", uid: "name" },
    { name: "DESCRIPTION", uid: "description" },
    { name: "STATUS", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
  ];
  const users: UserType[] = [
    {
      id: 1,
      name: "Tony Reichert",
      description: "CEO",

      status: "active",
    },
    {
      id: 2,
      name: "Zoey Lang",
      description: "Technical Lead",
      status: "In-active",
    },
    {
      id: 3,
      name: "Jane Fisher",
      description: "Senior Developer",
      status: "active",
    },
    {
      id: 4,
      name: "William Howard",
      description: "Community Manager",

      status: "In-active",
    },
    {
      id: 5,
      name: "Kristen Copper",
      description: "Sales Manager",

      status: "active",
    },
    {
      id: 6,
      name: "Kristen Copper",
      description: "Sales Manager",

      status: "active",
    },
    {
      id: 7,
      name: "Kristen Copper",
      description: "Sales Manager",

      status: "active",
    },
    {
      id: 8,
      name: "Kristen Copper",
      description: "Sales Manager",

      status: "In-active",
    },
    {
      id: 9,
      name: "Kristen Copper",
      description: "Sales Manager",

      status: "In-active",
    },

    {
      id: 10,
      name: "Kristen Copper",
      description: "Sales Manager",

      status: "active",
    },
    {
      id: 11,
      name: "Kristen Copper",
      description: "Sales Manager",

      status: "In-active",
    },
    {
      id: 12,
      name: "Kristen Copper",
      description: "Sales Manager",

      status: "active",
    },
    {
      id: 13,
      name: "Kristen Copper",
      description: "Sales Manager",

      status: "active",
    },
    {
      id: 14,
      name: "Kristen Copper",
      description: "Sales Manager",

      status: "active",
    },
    {
      id: 15,
      name: "Kristen Copper",
      description: "Sales Manager",

      status: "In-active",
    },
  ];
  const editHandler = () => {
    router.push("/super_admin/group_access_management/edit");
  };
  const renderCell = (user: any, columnKey: any) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize", fontWeight: 500 }}>
                {cellValue}
              </Text>
            </Row>
          </Col>
        );
      case "description":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize", fontWeight: 500 }}>
                {cellValue}
              </Text>
            </Row>
            <Row>
              <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
                {user?.team}
              </Text>
            </Row>
          </Col>
        );
      case "status":
        return <Status className={user?.status}>{cellValue}</Status>;

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Details" color="invert">
                <IconButton onClick={() => console.log("View user", user?.id)}>
                  <EyeSvg size={20} fill="#000000" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Duplicate" color="secondary">
                <IconButton onClick={() => console.log("View user", user?.id)}>
                  <DublicateSvg width={"25px"} height="25px" fill={"#7828C8"} />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }} onClick={editHandler}>
              <Tooltip content="Edit user" color="primary">
                <IconButton onClick={() => console.log("Edit user", user?.id)}>
                  <EditIcon size={20} fill={"#0072F5"} />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete user"
                color="error"
                onClick={() => console.log("Delete user", user?.id)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );

      default:
        return cellValue;
    }
  };
  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        style={{ margin: "12px 0px" }}
        onClick={() => router.push("/super_admin/group_access_management/add")}
      >
        <AddIcon />
      </Fab>
      <Table
        aria-label="Example table with custom cells"
        bordered
        striped
        lined
        shadow={false}
        css={{
          height: "auto",
          minWidth: "100%",
        }}
        selectionMode="none"
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column
              key={column.uid}
              hideHeader={column.uid === "actions"}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={users}>
          {(item) => (
            <Table.Row>
              {(columnKey) => (
                <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>
        <Table.Pagination
          shadow
          noMargin
          align="center"
          rowsPerPage={10}
          onPageChange={(page) => console.log({ page })}
        />
      </Table>
    </>
  );
};
export default DataTable;
