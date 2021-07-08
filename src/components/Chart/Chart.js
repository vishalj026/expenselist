import './Chart.css';
import ChartBar from './ChartBar';

function Chart(props) {
    const dataPointValues = props.dataPoints.map(datapoint => datapoint.value);
    const maxAmount = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map(datapoint =>
                <ChartBar
                    value={datapoint.value}
                    maxValue={maxAmount}
                    label={datapoint.label}
                    key={datapoint.label}
                />)}
        </div>
    );
}

export default Chart;