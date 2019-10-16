<template>
  <div class="container">
            <h2>Contact Us</h2>
            <div class="row">
                <div class="col-6">
                    <form>
                        <div class="form-group">
                            <label for="Masukan Nama">Nama</label>
                            <input type="text" class="form-control" placeholder="Masukan Nama">
                        </div>
                        <div class="form-group">
                            <label for="Alamat Email">Alamat Email</label>
                            <input type="text" class="form-control" placeholder="Masukan Alamat Email">
                        </div>
                        <div class="form-group">
                            <div class="form-group">
                                <label for="Alamat">Alamat</label>
                                <textarea class="form-control rounded-0" rows="1"
                                    placeholder="Masukan Alamat"></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label for="Password">Password</label>
                                <input type="text" class="form-control" placeholder="Password">
                            </div>

                            <div class="col">
                                <label for="konfirmasi">konfirmasi</label>
                                <input type="text" class="form-control" placeholder="Konfirmasi Password">
                            </div>
                        </div> <br>
                        <div class="form-group">
                            <label for="pendidikan">Pendidikan Terakhir</label>
                            <select class="custom-select" required>
                                <option value="" disabled selected>Pendidikan Terakhir</option>
                                <option value="SD">SD</option>
                                <option value="SMP">SMP</option>
                                <option value="SMA">SMA/SMK</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="">Jenis Kelamin</label><br>
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="customRadioInline1" name="customRadioInline1"
                                    class="custom-control-input">
                                <label class="custom-control-label" for="customRadioInline1">laki-Laki</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="customRadioInline2" name="customRadioInline1"
                                    class="custom-control-input">
                                <label class="custom-control-label" for="customRadioInline2">Perempuan</label>
                            </div>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck1">
                            <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
                        </div><br>
                        <button class="btn btn-primary" type="submit">Submit form</button><br>
                    </form>
                </div>
                <div class="col-6 d-flex justify-content-center align-items-center" >
                    <img src="TP10ping4.jpg" alt="">
                </div>
            </div>
        </div>

    
</template>

<script>
export default {
  name: "nav"
};
</script>

<style scoped>
.container {
            background-color: rgb(175, 175, 175);
            padding: 1em;
            margin: 1em;
            border-radius: 1em;
        }

        .col-6 img{
            width: 550px;
            padding: 70px;
            margin: auto;
        }
</style>