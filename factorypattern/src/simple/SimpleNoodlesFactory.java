package simple;

public class SimpleNoodlesFactory {
	public static final int TYPE_LZ = 1;//��������
    public static final int TYPE_PM = 2;//����

    public static INoodles createNoodles(int type) {
        switch (type) {
            case TYPE_LZ:
                return new LzNoodles();
            case TYPE_PM:
            default:
                return new PaoNoodles();
        }
    }
}
