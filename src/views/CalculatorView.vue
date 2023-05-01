<template>
    <div class="page">
        <h2>Calculator</h2>
        <div class="frame">
            <div class="airplane">
                <div>
                    <span>A/C Type:</span>
                    <select name="actype" id="actype">
                        <option>A319-132</option>
                        <option>A320-214</option>
                        <option>A320-251N</option>
                        <option>A321-211</option>
                        <option>A330-243</option>
                    </select>
                </div>
                <div>
                    <span>Gross Weight:</span>
                    <input type="text" autocomplete="off" id="weight">
                    <select name="unit" id="unit">
                        <option>kg</option>
                        <option>lbs</option>
                    </select>
                </div>
                <div>
                    <span>Gross Weight:</span>
                    <input type="text" autocomplete="off" id="weight">
                </div>
                <div>
                    <span>Configuration:</span>
                    <select name="config" id="config">
                        <option>1 + F</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div>
                    <span>A/ICE:</span>
                    <select name="aice" id="aice">
                        <option>Off</option>
                        <option>Engine</option>
                        <option>Total</option>
                    </select>
                </div>
                <div>
                    <span>Air Conditioning:</span>
                    <select name="actype" id="actype">
                        <option>Off</option>
                        <option>On</option>
                    </select>
                </div>
            </div>
        </div>
        <p class="note">NOTE: This calculator is only for flight simulation games.</p>
    </div>
</template>

<style scoped>
.note {
    color: #ff0000;
    font-size: larger;
    text-align: center;
    font-weight: bold;
    margin-top: 32px;
}
</style>