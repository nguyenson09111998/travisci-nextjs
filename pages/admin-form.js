import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Button from "components/CustomButtons/Button";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import AddOutlined from "@material-ui/icons/AddOutlined";
import Table from "components/Table/TableV1";
import DotIcon from "components/Icon/DotIcon";
import DiaLog from "components/CustomDialog/Dialog";
import InviteUserForm from '../pages-sections/admin-form/InviteUserForm';
import avatar from "assets/img/faces/avatar.jpg";
import ChipSelect from "components/Chip/ChipSelect";
// import DiaLog from "components/CustomDialog/Dialog";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
// import OrganizationUpload from "components/CustomUpload/OrganizationUpload";

import { connect } from 'react-redux';
// import InviteUserForm from "./InviteUserForm";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  selected: {
    height: 24,
    width: "auto",
    background: "#ECEEF0 !important",
    borderRadius: 28,
    color: "#25345C !important",
    display: "flex",
    alignItems: "center",
  },
  headContainer: {
    alignItems: "center",
    textAlign: "left",
    marginTop: "8px",
  },
  headLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& > div": {
      marginBottom: "0 !important",
      marginRight: 8,
    },
  },
  textName: {
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#25345C",
    marginLeft: "16px",
  },
  textEmail: {
    fontSize: "16px",
    lineHeight: "21px",
    color: "#C4C4C4",
  },
  chips: {
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: "12px",
    marginRight: 8,
  },
  tableRow: {
    "&:nth-of-type(even)": {
      backgroundColor: "#fbfbfb",
    },
  },
  onHeaderRow: {
    background: "#ECEEF0",
  },
  gridTitle: {
    padding: "20px",
  },
  onHeaderCell: {
    fontWeight: "bold",
  },
  alignItemsCenter: {
    display: "flex",
    alignItems: "center",
  },
  dotIcon: {
    color: "#7CE7AC",
  },
  textRoles: {
    fontSize: "16px",
    lineHeight: "24px",
  },
  textAccess: {
    display: "inline-block",
    fontSize: "14px",
    lineHeight: "17px",
    padding: "12px 16px",
    color: "#27AE60",
    background: "rgba(39, 174, 96, 0.1)",
    borderRadius: 23,
    fontWeight: "bold",
  },
  iconButton: {
    "&:hover": {
      color: "#25345C !important",
    },
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: "50%",
  },
  rootSelect: {
    width: "100%",
  },
  dialogTitle: {
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "26px",
    color: "#25345C",
    margin: "24px",
    textAlign: "center",
  },
  addTagButton:{
    background: "#25345C",
    borderRadius: "28px",
    padding: "14px 32px" ,
    textTransform: "initial",
    fontSize: "14px",
    lineHeight: "17px",
    /* font-family: Lato!important; */
    fontStyle: "normal",

    fontWeight: "bold",
    marginRight: "2px",
  }
}));

function AdminFrom(props) {
  const classes = useStyles();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const [open, setOpen] = React.useState(false);


  const handleClose = () => {
    setOpen(false)
  }

  React.useEffect(() => {
    console.log("aabbcc", props.newTag?.id)
  }, [props.newTag?.id]);

  let data = [];

  let item = {
    id: 1,
    tag: "Cameron Williamson",
    slug: "jessica.hanson@example.com",
    url: "View and Edit",
  };

  let item1 = {
    id: 2,
    tag: "Cameron Williamson",
    slug: "jessica.hanson@example.com",
    url: "View and Edit",
  };
  data.push(item);
  data.push(item1);

  const [render, setRender] = React.useState(data);

  //Child Component
  const handleData = (toBeRenderedData) => {
    setRender([...render, toBeRenderedData]);
  };

  console.log(render);
  console.log(data);
  //Push new data to db

  const columns = [
    {
      title: "Tag",
      key: "tag",
      onHeaderCell: { className: classes.onHeaderCell },
      render: (tag) => (
        <div className={classes.alignItemsCenter}>
          <div>{tag}</div>
        </div>
      ),
    },
    {
      title: "Slug",
      key: "slug",
      onHeaderCell: { className: classes.onHeaderCell },
      render: (slug) => <div className={classes.textEmail}>{slug}</div>,
    },
    {
      title: "ImageUrl",
      key: "imageUrl",
      onHeaderCell: { className: classes.onHeaderCell },
      render: (imageUrl) => (
        <div className={classes.alignItemsCenter}>
          <div>
            <DotIcon className={classes.dotIcon} />
          </div>
          <div className={classes.textRoles}>{imageUrl}</div>
        </div>
      ),
    },
    {
      title: "Description",
      key: "description",
      onHeaderCell: { className: classes.onHeaderCell },
      render: (description) => <div className={classes.textEmail}>{description}</div>,
    },
    {
      title: "Html",
      key: "html",
      onHeaderCell: { className: classes.onHeaderCell },
      render: (html) => <div className={classes.textEmail}>{html}</div>,
    },
    {
      title: "Title",
      key: "title",
      onHeaderCell: { className: classes.onHeaderCell },
      render: (title) => <div className={classes.textEmail}>{title}</div>,
    },
  ];

  const handleDelete = (chipToDelete) => () =>
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  const handleClearAll = () => setSelectedRowKeys(() => []);
  const onSelectChange = (selectedRowKeys) =>
    setSelectedRowKeys(() => [...selectedRowKeys]);

  const onPageChange = (page, pageSize) => {
    console.log(page, pageSize);
    props.getUserRoles({ page, pageSize });
  };

  const onShowSizeChange = (page, pageSize) => {
    props.getUserRoles({ page, pageSize });
    console.log(page, pageSize);
  };

  console.log(open);
  return (
    <div>
      <Button
        round
        className={classes.addTagButton}
        startIcon={<AddOutlined />}
        onClick={() => setOpen(true)}
      >
        Add Tag
      </Button>
      <Table
        renderTitle={
          <GridContainer justify="space-between" className={classes.gridTitle}>
            <GridItem>
              <ChipSelect
                data={selectedRowKeys}
                handleDelete={handleDelete}
                handleClearAll={handleClearAll}
              />
            </GridItem>
            <GridItem className={classes.headLeft}>
              <ToolboxButton
                placeholder="Search for tag or email"
                showFilter
                showTrash
              />
            </GridItem>
          </GridContainer>
        }
        rowSelection={{
          selectedRowKeys,
          onChange: onSelectChange,
        }}
        pagination={{
          total: props.total,
          current: props.page,
          pageSize: props.pageSize,
          onChange: onPageChange,
          onShowSizeChange: onShowSizeChange,
        }}
        columns={columns}
        dataSource={render}
        onHeaderRow={{ className: classes.onHeaderRow }}
        onBodyRow={{ className: classes.tableRow }}
      />
      <DiaLog
        renderTitle={<h3 className={classes.dialogTitle}>Invite User</h3>}
        open={open}
        setDialog={handleClose}
        handleData={handleData}
      />

    </div>
  );
}

const mapStateToProps = ({ blog }) => {
  return {
    newTag: blog.newTag
  };
};

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminFrom);
