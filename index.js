const { DockerComposeEnvironment } = require('testcontainers');

const composeFilePath = "./";
const composeFile = "docker-compose.yml";

;(async () => {
  const containers = await new DockerComposeEnvironment(
    composeFilePath,
    composeFile
  ).withBuild().up()

  setTimeout(() => {
    console.log('Downing Containers')

    // Don't remove the volumes (as expected)
    containers.down({ removeVolumes: true })
  }, 5000)
})();
