import React, { useState,useEffect } from 'react';
import Select from "@material-ui/core/Select";
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpIcon from "components/Icon/ArrowUpIcon";
import ArrowRightIcon from "components/Icon/ArrowRightIcon";
import ArrowLeftIcon from "components/Icon/ArrowLeftIcon";
import ArrowDownIcon from "components/Icon/ArrowDownIcon";


const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 20,
    padding: "0 10px"
  },
  showText: {
    paddingRight: "36px",
    fontFamily: 'Lato',
    fontWeight: 'normal',
    color: '#C4C4C4',
    fontSize: '12px'
  },
  pageText: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    paddingRight: '16px',
    fontSize: '12px'
  },
  selectPage: {
    '&:hover': {
      '&:before': {
        borderBottom: "none"
      }
    },
    '&:before': {
      borderBottom: "none!important"
    }
  },
  selected: {
    border: '1px solid #25345C!important',
    background: 'none!important'
  },
  outlined: {
    border: 'none',
    background: '#FFFFFF',
    fontSize: "12px",
    height: '40px',
    width: "40px",
    borderRadius: "50%",
    fontWeight: "bold"
  },
  iconButton: {
    height: '40px',
    width: "40px",
    margin: '0 3px'
  }
}));

export default function GenPaginationV1(props) {
  const classes = useStyles();

  const [total, setTotal] = useState(props.total || 0);
  const [current, setCurrent] = useState(props.current || 1);
  const [pageSize, setPageSize] = useState(props.pageSize || 10);
  const [showSizeChanger] = useState(props.showSizeChanger || false);
  const [pageSizeOptions, setPageSizeOptions] = useState(props.pageSizeOptions || []);

  useEffect(() => setCurrent(props.current),[props.current])
  useEffect(() => setTotal(props.total),[props.total])
  useEffect(() => setPageSize(props.pageSize),[props.pageSize])

  const onChange = (event, page) => {
    setCurrent(page);
    if (props.onChange) {
      props.onChange(event, page)
    }
  }

  const onShowSizeChange = (event) => {
    let value = event.target.value;
    if (Math.ceil(total / value) < current) {
      setCurrent(Math.ceil(total / value))
    }
    setPageSize(value)
    if (props.onShowSizeChange) {
      props.onShowSizeChange(value)
    }
  }

  const startPage = pageSize * current - pageSize;
  const endPage = pageSize * current > total ? total : pageSize * current;
  const count = Math.ceil(total / pageSize);
  return (
    <>
      <Grid container className={classes.root} justify="space-between">
        <Grid item>
          <Pagination
            variant="outlined"
            count={count}
            page={current}
            onChange={onChange}
            showFirstButton
            showLastButton
            renderItem={(item) => {
              if (item.type == "first") {
                item = { ...item, variant: "text" }
                return (
                  <IconButton className={classes.iconButton} {...item}>
                    <ArrowDownIcon />
                  </IconButton>
                )
              }

              if (item.type == "last") {
                item = { ...item, variant: "text" }
                return (
                  <IconButton className={classes.iconButton} {...item}>
                    <ArrowUpIcon />
                  </IconButton>
                )
              }

              if (item.type == "next") {
                item = { ...item, variant: "text" }
                return (
                  <IconButton className={classes.iconButton} {...item}>
                    <ArrowRightIcon />
                  </IconButton>
                )
              }

              if (item.type == "previous") {
                item = { ...item, variant: "text" }
                return (
                  <IconButton className={classes.iconButton} {...item} >
                    <ArrowLeftIcon />
                  </IconButton>
                )
              }
              return <PaginationItem
                classes={{
                  selected: classes.selected,
                  outlined: classes.outlined
                }}
                {...item}
              />
            }}
          />
        </Grid>
        {showSizeChanger && (
          <Grid item>
            <Grid container alignItems="center" >
              <Grid item className={classes.showText}> Showing {startPage}-{endPage} of {total}</Grid>
              <Grid item>
                <span className={classes.pageText}> Items per page: </span>
                <Select className={classes.selectPage} onChange={onShowSizeChange} native value={pageSize}>
                  {pageSizeOptions.map(page => <option value={page}>{page}</option>)}
                </Select>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>

    </>
  );

}
