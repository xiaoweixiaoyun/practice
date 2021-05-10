package wei.code.common.domain;

import java.util.Date;

public class BaseModel {
    protected Long current = 1L;
    protected Long size = 10L;
    protected Date startTime;
    protected Date endTime;

    public BaseModel() {
    }

    public Long getCurrent() {
        return this.current;
    }

    public void setCurrent(Long current) {
        this.current = current;
    }

    public Long getSize() {
        return this.size;
    }

    public void setSize(Long size) {
        this.size = size;
    }

    public Date getStartTime() {
        return this.startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return this.endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }
}
