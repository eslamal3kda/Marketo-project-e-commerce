import React from "react";

export default function StatisticComponent({ title, statistic }) {
    return (
        <div className="single-statistic">
            <span className="statistic">{statistic}</span>
            <span className="title">{title}</span>
        </div>
    );
}
