<template>
    <div class="page">
        <h2>THE Calculator</h2>

        <table>
            <tr>
                <td>
                    <span>A/C Type:</span>
                </td>
                <td>
                    <select name="actype" id="actype">
                        <option>A319-132</option>
                        <option>A320-214</option>
                        <option>A320-251N</option>
                        <option>A321-211</option>
                        <option>A330-243</option>
                    </select>
                </td>
                <td>
                </td>
            </tr>
            <tr>
                <td>
                    <span>Gross Weight:</span>
                </td>
                <td>
                    <input type="text" autocomplete="off" id="weight">
                </td>
                <td>
                    <select name="unit" id="unit" class="special">
                        <option>kg</option>
                        <option>lbs</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <span>CG:</span>
                </td>
                <td>
                    <input type="text" autocomplete="off" id="cg">
                </td>
                <td>
                    <span class="left">% MAC (e.g.: 25.1) </span>
                </td>
            </tr>
            <tr>
                <td>
                    <span>Configuration:</span>
                </td>
                <td>
                    <select name="config" id="config">
                        <option>1 + F</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <span>A/ICE:</span>
                </td>
                <td>
                    <select name="aice" id="aice">
                        <option>Off</option>
                        <option>Engine</option>
                        <option>Total</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <span>Air Conditioning:</span>
                </td>
                <td>
                    <select name="actype" id="actype">
                        <option>Off</option>
                        <option>On</option>
                    </select>
                </td>
            </tr>

            <tr>
                <td colspan="3">
                    <hr>
                </td>
            </tr>

            <tr>
                <td>
                    <span>Airport (ICAO):</span>
                </td>
                <td>
                    <input type="text" autocomplete="off" id="airport" class="special">
                    <select name="runway" id="runway" class="special"></select>
                </td>
                <td>
                    <button style="margin-left: 7.5px;">Get METAR & APT/DATA</button>
                </td>
            </tr>
            <tr>
                <td>
                    Runway Length:
                </td>
                <td>
                    <input type="text" autocomplete="off" id="runwaylength">
                </td>
                <td>
                    <select name="unit" id="unit" class="special">
                        <option>m</option>
                        <option>ft</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <span>Runway Heading:</span>
                </td>
                <td>
                    <input type="text" autocomplete="off" id="runwayheading">
                </td>
                <td>
                    <span class="left">°</span>
                </td>
            </tr>
            <tr>
                <td>
                    <span>Runway Condition:</span>
                </td>
                <td>
                    <select name="runwaycondition" id="runwaycondition">
                        <option>Dry</option>
                        <option>Wet</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <span>Airport Elevation:</span>
                </td>
                <td>
                    <input type="text" autocomplete="off" id="airportelevation">
                </td>
                <td>
                    <span class="left">ft</span>
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    <hr>
                </td>
            </tr>

            <tr>
                <td>
                    <span>QNH:</span>
                </td>
                <td>
                    <input type="text" autocomplete="off" id="qnh">
                </td>
                <td>
                    <select name="presstype" id="presstype" class="special">
                        <option>hPa</option>
                        <option>inHg</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <span>Temperature:</span>
                </td>
                <td>
                    <input type="text" autocomplete="off" id="temperature">
                </td>
                <td>
                    <span class="left">°C</span>
                </td>
            </tr>
            <tr>
                <td>
                    <span>Wind:</span>
                </td>
                <td>
                    <input type="text" autocomplete="off" id="wind">
                </td>
                <td>
                    <span class="left">°/kt</span>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <button style="margin-top: 10px;">Calculate</button>
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    <p class="note">NOTE: This calculator is only for flight simulation games.</p>
                </td>
            </tr>
        </table>
        <button style="margin-top: 20px; width: auto;">DEVPRINT</button>
    </div>
</template>

<style scoped>
hr {
    margin-block: 20px;
    color: var(--color-text);
}
td:first-of-type {
    text-align: left;
    padding-right: 16px;
}
.left {
    float: left;
}
table {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 32px;
    padding: 24px;
    border-radius: 8px;
}
.note {
    color: #ff0000;
    font-size: larger;
    text-align: center;
    font-weight:600;
    margin-top: 48px;
}

select, input, button {
    width: 100%;
}
.special {
    width: 50%;
    float: left;
}

input {
    border: none;
    border-bottom: solid 1px var(--color-text);
    background-color: transparent;
    color: var(--color-text);
    padding: 2px;
    outline: none;
    font-weight: 600;
}

select {
    border: none;
    border-bottom: solid 1px var(--color-text);
    background-color: transparent;
    color: var(--color-text);
    padding: 2px;
    outline: none;
}

select option {
    background-color: var(--color-background);
    color: var(--color-text);
}

button {
    color: var(--color-background);
    border: none;
    padding: 7.5px;
    font-weight: 600;
    border-radius: 4px;
    background-color: var(--color-accent);
    outline: none;
    box-shadow: 0 0 5px 0 rgba(255, 255, 255, 0.5);
}

button:hover {
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.5);
    cursor: pointer;
}

@media (max-width: 768px) {
    table {
        width: 100%;
    }
    .special {
        width: 100%;
    }
    td:first-of-type {
        padding-right: 0;
    }
}

@media (max-width: 425px) {
    .special {
        width: 100%;
    }
}
</style>