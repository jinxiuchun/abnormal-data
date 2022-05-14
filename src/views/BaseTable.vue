<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 所有问题
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-select v-model="query.product" placeholder="产品" class="handle-select mr10">
                    <el-option key="1" label="boston" value="boston"></el-option>
                </el-select>
                <el-select v-model="query.station" placeholder="工位" class="handle-select mr10">
                </el-select>
                <el-select v-model="query.ar_case" placeholder="用例" class="handle-select mr10">
                </el-select>
                <el-button type="primary" @click="handleSearch"><el-icon><Search /></el-icon>Search</el-button>
            </div>
            <el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header">
                <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
                <el-table-column prop="product" label="产品"></el-table-column>
                <el-table-column prop="version" label="版本号"></el-table-column>
                <el-table-column prop="station" label="专项"></el-table-column>
                <el-table-column prop="ar_type" label="问题类型"></el-table-column>
                <el-table-column prop="ar_module" label="问题模块"></el-table-column>
                <el-table-column prop="ar_case" label="测试用例"></el-table-column>
                <el-table-column prop="ar_device" label="测试设备"></el-table-column>
                <el-table-column prop="ar_heap" label="Heap"></el-table-column>
                <el-table-column prop="ar_trace" label="Trace"></el-table-column>
                <el-table-column prop="ar_task" label="任务链接"></el-table-column>
                <el-table-column prop="ar_date" label="日期"></el-table-column>
                <el-table-column label="操作" align="center">
                    <el-icon><Star /></el-icon>
                    <el-button type="primary">详情</el-button>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination background layout="total, prev, pager, next" :current-page="query.pageIndex"
                    :page-size="query.pageSize" :total="pageTotal" @current-change="handlePageChange"></el-pagination>
            </div>
        </div>

    </div>
</template>

<script>
import { ref, reactive } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { fetchData } from "../api/index";

export default {
    name: "basetable",
    setup() {
        const query = reactive({
            product: "",
            station: "",
            ar_case: "",
            pageIndex: 1,
            pageSize: 10,
        });
        const tableData = ref([]);
        const pageTotal = ref(0);
        // 获取表格数据
        const getData = () => {
            fetchData(query).then((res) => {
                tableData.value = res.list;
                pageTotal.value = res.pageTotal || 50;
            });
        };
        getData();

        // 查询操作
        const handleSearch = () => {
            query.pageIndex = 1;
            getData();
        };
        // 分页导航
        const handlePageChange = (val) => {
            query.pageIndex = val;
            getData();
        };



        return {
            query,
            tableData,
            pageTotal,
            handleSearch,
            handlePageChange,
        };
    },
};
</script>

<style scoped>
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 300px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
}
.red {
    color: #ff0000;
}
.mr10 {
    margin-right: 10px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
</style>
