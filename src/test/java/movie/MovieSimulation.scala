package movie;

import com.intuit.karate.gatling.PreDef._
import io.gatling.core.Predef._
import scala.concurrent.duration._

class MovieSimulation extends Simulation {

  val protocol = karateProtocol(
    "/movies" -> Nil/*,
    "/cats" -> pauseFor("get" -> 15, "post" -> 25)*/
  )

  /*protocol.nameResolver = (req, ctx) => req.getHeader("karate-name")*/

  val create = scenario("criar e recuperar novo filme").exec(karateFeature("src/test/java/movie/movie.feature"))

  setUp(
    create.inject(rampUsers(10) over (5 seconds)).protocols(protocol)
  )

}