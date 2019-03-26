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

  val create = scenario("Teste para criar novo filme").exec(karateFeature("classpath:movie/create-movie.feature"))

  setUp(
    create.inject(rampUsers(4) over (5 seconds)).protocols(protocol)
  )
}