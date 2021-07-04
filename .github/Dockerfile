FROM hotio/base@sha256:73cce701199c33f1600dbe6673acb889adacdcb0c4d5437f7fda839cbd89d883

ARG DEBIAN_FRONTEND="noninteractive"

EXPOSE 7878

# install packages
RUN apt update && \
    apt install -y --no-install-recommends --no-install-suggests \
        libmediainfo0v5 libicu66 && \
# clean up
    apt autoremove -y && \
    apt clean && \
    rm -rf /tmp/* /var/lib/apt/lists/* /var/tmp/*

ARG VERSION
ARG PACKAGE_VERSION=${VERSION}
ARG APP_DIR="/app"
RUN mkdir "${APP_DIR}/bin"
COPY _output/netcoreapp3.1/linux-x64 ${APP_DIR}/bin
RUN rm -rf "${APP_DIR}/bin/Radarr.Update"
RUN chmod -R u=rwX,go=rX "${APP_DIR}"

COPY .github/root/ /
