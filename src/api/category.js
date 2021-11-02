import request from '@/utils/request'

export default {
    
    //查询商品三级分类
    list(){
        return request({
            url: `/product/category/list/tree`,
            method: 'get'
          })
    }

}