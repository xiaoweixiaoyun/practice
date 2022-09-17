package simple;

public class FactoryMain {
	public static void main(String[] args) {
		SimpleNoodlesFactory.createNoodles(1).desc();
		SimpleNoodlesFactory.createNoodles(2).desc();
	}

}
