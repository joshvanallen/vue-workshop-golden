<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Notes</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid">
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="title" label="Title"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    clearable
                    v-model="content"
                    :rules="contentRules"
                    label="Description"
                    rows="1"
                    auto-grow
                    required
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="blue darken-1" text @click="emitClose">Close</v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="emitNote({ title, content })"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    title: null,
    content: "",
    valid: true,
    originalNote: null,
    contentRules: [v => !!v || "Content is required"]
  }),
  methods: {
    emitNote(note) {
      if (this.valid) {
        if (this.originalNote) {
          this.$emit("save", Object.assign({}, this.originalNote, note));
        } else {
          this.$emit("save", note);
        }
        this.emitClose();
      }
    },
    emitClose() {
      this.close();
      this.$emit("close");
    },
    show(originalNote) {
      if (originalNote) {
        const { title, content } = originalNote;
        this.title = title;
        this.content = content;
        this.originalNote = originalNote;
      }

      this.dialog = true;
    },
    close() {
      this.dialog = false;
      this.$refs.form.reset();
    }
  }
};
</script>
