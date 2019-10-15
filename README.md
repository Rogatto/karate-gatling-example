# karate-gatling-example
Repositório de exemplo do Framework Karate e Gatling

# Executar Projeto
Efetuar clone para seu local e utilizar comandos do maven para executar o projeto:

mvn clean test -Dtest="MovieRunner"

# Executar Projeto com as duas features sendo testadas paralelamente:
mvn clean test -Dtest="ParallelRunner" 

# Executar Testes com o Gatling:
mvn clean test-compile gatling:test

