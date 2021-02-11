import React from "react";
import {
    Box,
    Button,
    Card,
    CardHeader,
    Chip,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
    Tooltip,
    makeStyles
} from '@material-ui/core';
import moment from 'moment';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


const useStyles = makeStyles(() => ({
    root: {},
    actions: {
        justifyContent: 'flex-end'
    }
}));

const data = [
    {
        id: "alsdhj1kh23kjhlkjshdfkgjhl1kj2hlkjh34lkj5",
        referenceNumber: 'MSKWJEI',
        type: "Payment or Cash In",
        description: "Payment for something",
        createdAt: 1555016400000,
        amount: 30.5,
    },
];

const Transaction = (props) => {
    const classes = useStyles();

    return <Card
        className={classes.root}
    >
        <CardHeader title="Transaction History" />
        <Divider />
        <Box minWidth={800}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Reference Number
                        </TableCell>
                        <TableCell>
                            Transaction Type
                        </TableCell>
                        <TableCell>
                            Description
                        </TableCell>
                        <TableCell>
                            Date
                        </TableCell>
                        <TableCell>
                            Amount
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.transactions && props.transactions.map((transaction) => (
                        <TableRow
                            hover
                            key={transaction.id}
                        >
                            <TableCell>
                                {transaction.referenceNumber}
                            </TableCell>
                            <TableCell>
                                {transaction.transactionType}
                            </TableCell>
                            <TableCell>
                                {transaction.description}
                            </TableCell>
                            <TableCell>
                                {moment(transaction.createdAt).format('DD/MM/YYYY')}
                            </TableCell>
                            <TableCell>
                                <Chip
                                    color={transaction.transactionType == "Payment" ? "secondary" : "primary"}
                                    label={transaction.transactionType == "Payment" ? "-"+transaction.amount : "+"+transaction.amount}
                                    size="small"
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>

    </Card>
}

export default Transaction