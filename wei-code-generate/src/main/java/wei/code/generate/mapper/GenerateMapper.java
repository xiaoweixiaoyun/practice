package wei.code.generate.mapper;

import org.apache.ibatis.annotations.Mapper;
import wei.code.generate.entity.ColumnEntity;
import wei.code.generate.entity.GenerateEntity;
import wei.code.generate.entity.TableEntity;

import java.util.List;
@Mapper
public interface GenerateMapper {
    /**
     * @Author MRC
     * @Description 通过表名查询表信息和字段信息
     * @Date 10:43 2019/11/5
     * @Param [tableName]
     * @return java.util.Map<java.lang.String,java.lang.String>
     **/
    GenerateEntity selectTable(String name);
    /**
     * @Author MRC
     * @Description 查询当前连接数据库的所有表信息
     * @Date 17:37 2020/9/27
     * @Param []
     * @return java.util.List<xyz.chaobei.generate.entity.TableEntity>
     **/
    List<TableEntity> tableList();
    /**
     * @Author MRC
     * @Description 查询指定表的字段信息
     * @Date 13:40 2020/9/28
     * @Param [name]
     * @return java.util.List<xyz.chaobei.generate.entity.ColumnEntity>
     **/
    List<ColumnEntity> selectColumns(String name);
}
