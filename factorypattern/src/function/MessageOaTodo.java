package function;

public class MessageOaTodo extends AbstractMessage {

	@Override
	public void sendMesage() throws Exception {
		if (null == getMessageParam() || null == getMessageParam().get("OAUSERNAME")
				|| "".equals(getMessageParam().get("OAUSERNAME"))) {
			throw new Exception("����OA����,��Ҫ����OAUSERNAME����");// Ϊ�˼�����쳣Ҳ���Զ�����
		} // ����Ĳ�������ͱȽ϶��˲�һһ������

		System.out.println("����OA���죬����֪ͨ��" + getMessageParam().get("OAUSERNAME"));

	}

}
