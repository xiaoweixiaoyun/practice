package simple;

public class SimpleNoodlesFactory {
	public static final int TYPE_LZ = 1;//兰州拉面
    public static final int TYPE_PM = 2;//泡面

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
