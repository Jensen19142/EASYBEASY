import React, { useState, useEffect } from "react";
import data from "./SurveillanceFrequency.json"; // Import JSON directly
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const SurveillanceFrequency = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const countryData = data.progressionChartData[0].countryData[0].md;

        // Map data into a suitable format for Recharts
        const formattedData = countryData.map((item) => ({
            date: item.ym, // Year-Month
            value: item.p || item.c, // Use 'p' if present, otherwise use 'c'
        }));

        setChartData(formattedData);
    }, []);

    return (
        <div>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" name="Frequency" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SurveillanceFrequency;
