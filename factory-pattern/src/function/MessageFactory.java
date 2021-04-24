package function;

import java.util.HashMap;
import java.util.Map;

public class MessageFactory implements IMessageFactory {

	@Override
	public IMessage createMessage(String messageType) {
		// ����ķ�ʽ�ǣ�������֪���Լ���Ҫʲô��Ʒ�����������ֲ�Ʒ��ȫ�ɹ��������������ﲻӦ�ô�����������Ĳ�����
		IMessage myMessage;
		Map<String, Object> messageParam = new HashMap<String, Object>();
		// ����ĳЩ����ȥѡ�񾿾�������һ�������ʵ�ֶ����������Դ���ģ�Ҳ���Դ�����;����ȡ��
		// sms
		if ("SMS".equals(messageType)) {
			myMessage = new MessageSms();
			messageParam.put("PHONENUM", "123456789");
		} else
		// OA����
		if ("OA".equals(messageType)) {
			myMessage = new MessageOaTodo();
			messageParam.put("OAUSERNAME", "testUser");
		} else
		// email
		if ("EMAIL".equals(messageType)) {
			myMessage = new MessageEmail();
			messageParam.put("EMAIL", "test@test.com");
		} else
		// Ĭ������email�����Ʒ
		{
			myMessage = new MessageEmail();
			messageParam.put("EMAIL", "test@test.com");
		}
		myMessage.setMessageParam(messageParam);
		return myMessage;
	}

}
