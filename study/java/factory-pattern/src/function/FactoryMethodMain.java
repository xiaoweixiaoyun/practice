package function;

public class FactoryMethodMain {
	public static void main(String[] args) {
		MessageFactory myMessageFactory = new MessageFactory();
		IMessage myMessage;
		// ���������������˵������֪���������message�����Ʒ����϶Ƚ���
		try {
			// ����һ������֪ͨ
			myMessage = myMessageFactory.createMessage("SMS");
			myMessage.sendMesage();

			// ��һ��oa����
			myMessage = myMessageFactory.createMessage("OA");
			myMessage.sendMesage();

			// ��һ���ʼ�֪ͨ
			myMessage = myMessageFactory.createMessage("EMAIL");
			myMessage.sendMesage();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
