package function;

import java.util.Map;

public interface IMessage {
	public Map<String, Object> getMessageParam();

	public void setMessageParam(Map<String, Object> messageParam);

	public void sendMesage() throws Exception;
}
