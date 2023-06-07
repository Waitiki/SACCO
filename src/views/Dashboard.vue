
<template>
    <Members />
    <h3 class="i-name">
        Admin Dashboard
    </h3>

    <div class="values">
        <div class="val-box">
            <i class="fas fa-users"/>
            <div>
                <h3>5,194</h3>
                <span>No. Members</span>
            </div>
        </div>
        <div class="val-box">
            <i class="fas fa-shopping-cart"/>
            <div>
                <h3>5,194</h3>
                <span>No. of Products</span>
            </div>
        </div>
        <div class="val-box">
            <i class="fas fa-dollar-sign"/>
            <div>
                <h3>5,194</h3>
                <span>No. of Loans</span>
            </div>
        </div>
        
    </div>


</template>

<style>
.i-name{
    color: #2f855a;
    padding: 20px 20px 0 20px;
    font-size: 24px;
    font-weight: 700;
}

.values{
    padding: 20px 20px 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

}

.values .val-box{
    background: #2f855a;
    width: 140px;
    padding: 0px 115px;
    border-radius: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.values .val-box i {
    font-size: 25px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    border-radius: 50%;
    text-align: center;
    color: #fff;
    background-color: chartreuse;
    margin-right: 15px;
}

.values .val-box h3{
    font-size: 18px;
    font-weight: 600;
}

.values .val-box span{
    font-size: 15px;
}

</style>