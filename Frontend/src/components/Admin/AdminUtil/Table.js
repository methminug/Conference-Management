import React from "react";
import "./style/table.css";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TBody from "@material-ui/core/TableBody";
import TCell from "@material-ui/core/TableCell";
import TContainer from "@material-ui/core/TableContainer";
import THead from "@material-ui/core/TableHead";
import TRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
    table: {
        minWidth: 75,
    },
});

export default function Table(props) {
    const classes = useStyles();

    let stateColor;
    return (
        <div className="table">
            <TContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <THead>
                        <TRow>
                            <TCell>{props.topic}</TCell>
                            <TCell></TCell>
                            <TCell></TCell>
                        </TRow>
                        <TRow>
                            <TCell align="center">TopicC</TCell>
                            <TCell align="center">Submited Date</TCell>
                            <TCell align="center">Status</TCell>
                        </TRow>
                    </THead>
                    <TBody>
                        {props.Tablecontent.map((paper) => {
                            if (paper.isApproved == "approved") {
                                stateColor = "approved";
                            } else if (paper.isApproved == "rejected") {
                                stateColor = "rejected";
                            } else {
                                stateColor = "pending";
                            }
                            return (
                                <TRow key={paper._id}>
                                    <TCell align="center">{paper.topic}</TCell>
                                    <TCell align="center">
                                        {new Date(
                                            paper.createdAt
                                        ).toDateString()}
                                    </TCell>
                                    <TCell
                                        className={stateColor}
                                        align="center"
                                    >
                                        {paper.isApproved}
                                    </TCell>
                                </TRow>
                            );
                        })}
                    </TBody>
                </Table>
            </TContainer>
        </div>
    );
}
