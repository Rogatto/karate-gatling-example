package movie;

import com.intuit.karate.KarateOptions;
import com.intuit.karate.junit4.Karate;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

@RunWith(Karate.class)
@KarateOptions(features = "src/test/java/movie/")
public class MovieRunner {

    @BeforeClass
    public static void before() {
        System.setProperty("karate.env", "dev");
    }
}