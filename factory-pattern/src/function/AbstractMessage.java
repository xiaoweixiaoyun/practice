package function;

import java.util.Map;

public abstract class AbstractMessage implements IMessage {
	private Map<String, Object> messageParam;// ����������Ϊ������Ʒ����Ҫ��ԭ���Ͽ⡣����Ǹ��Զ���Ķ�������Ϊ�˲��������ʹ��Map��

	@Override
	public Map<String, Object> getMessageParam() {
		return messageParam;
	}

	@Override
	public void setMessageParam(Map<String, Object> messageParam) {
		this.messageParam = messageParam;  
	}
}
